export type ToolType = 'llm' | 'search' | 'retrieve' | 'utility';

export interface ToolParameter {
    name: string;
    type: 'string' | 'number' | 'boolean' | 'string[]';
    description?: string;
}

export interface ToolSignature {
    parameters: ToolParameter[];
    outputs: ToolParameter[];
}

// Tool and workflow variable names as branded types
export type ToolParameterName = string & { readonly __brand: unique symbol };
export type ToolOutputName = string & { readonly __brand: unique symbol };
export type WorkflowVariableName = string & { readonly __brand: unique symbol };

// Mapping types with semantic meaning
export type ParameterMappingType = Record<ToolParameterName, WorkflowVariableName>;    // from tool parameter -> to workflow variable
export type OutputMappingType = Record<ToolOutputName, WorkflowVariableName>;          // from tool output -> to workflow variable

// Type for resolved parameter values
export type ResolvedParameters = Record<ToolParameterName, string | number | boolean | string[]>;

// Type for tool outputs
export type ToolOutputs = Record<ToolOutputName, string | number | boolean | string[]>;

export interface Tool {
    id: string;
    type: ToolType;
    name: string;
    description: string;
    signature: ToolSignature;
    parameterMappings?: ParameterMappingType;
    outputMappings?: OutputMappingType;
    promptTemplate?: string;  // ID of the selected prompt template
} 