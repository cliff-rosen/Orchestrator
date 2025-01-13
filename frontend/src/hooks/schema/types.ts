export type PrimitiveType = 'string' | 'number' | 'boolean';
export type ComplexType = 'array' | 'object';
export type ValueType = PrimitiveType | ComplexType;

// Base value type that all schema entries extend
export interface BaseValue {
    name: string;
    type: ValueType;
    required?: boolean;
}

// Primitive values (string, number, boolean)
export interface PrimitiveValue extends BaseValue {
    type: PrimitiveType;
}

// Array values
export interface ArrayValue extends BaseValue {
    type: 'array';
    items: SchemaValue;  // The type of items in the array
}

// Object values with nested fields
export interface ObjectValue extends BaseValue {
    type: 'object';
    fields: Record<string, SchemaValue>;  // Named fields mapping to their types
}

// Union type for all possible schema values
export type SchemaValue = PrimitiveValue | ArrayValue | ObjectValue;

// The state maps keys to schema values
export type SchemaState = Record<string, SchemaValue>;

// Schema manager interface
export interface SchemaManager {
    schemas: SchemaState;
    values: Record<string, any>;
    setSchema: (key: string, value: SchemaValue) => void;
    setValues: (key: string, value: any) => void;
    getValue: (key: string) => any;
    removeSchema: (key: string) => void;
} 