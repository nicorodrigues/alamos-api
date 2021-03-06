export interface DBPermissions {
    read: string[];
    [key: string]: string[];
}

export interface Permission {
    action: string | string[];
    subject?: string | string[];
    /** an array of fields to which user has (or not) access */
    fields?: string[];
    /** an object of conditions which restricts the rule scope */
    conditions?: any;
    /** indicates whether rule allows or forbids something */
    inverted?: boolean;
    /** message which explains why rule is forbidden */
    reason?: string;
}
