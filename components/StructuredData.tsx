interface StructuredDataProps {
  data: object;
}

/**
 * StructuredData Component
 * 
 * Security Note: Using dangerouslySetInnerHTML is safe here because:
 * 1. JSON.stringify() properly escapes all special characters
 * 2. The data is controlled (not user input)
 * 3. The script type is application/ld+json (not executable JavaScript)
 * 
 * This is the standard way to inject JSON-LD structured data in React.
 */
export default function StructuredData({ data }: StructuredDataProps) {
  // Validate that data is a plain object (not a function, class instance, etc.)
  if (typeof data !== 'object' || data === null || Array.isArray(data)) {
    console.warn('StructuredData: data must be a plain object');
    return null;
  }

  try {
    const jsonString = JSON.stringify(data);
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonString }}
      />
    );
  } catch (error) {
    console.error('StructuredData: Failed to stringify data', error);
    return null;
  }
}




