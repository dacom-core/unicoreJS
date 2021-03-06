import ReadApi from '../readApi';
import { TableCodeConfig } from '../types';
import { TableResult } from "../../eos/types";
interface DefaultJsonValueMaker {
    [key: string]: () => any;
}
export interface TableRowsArgs {
    scope?: string;
    table: string;
    table_key?: string;
    lower_bound?: number | string;
    upper_bound?: number | string;
    limit?: number;
    key_type?: string;
    index_position?: number;
    parseMetaAsJson?: boolean;
    parseKeysAsJson?: string[];
    defaultJsonValues?: DefaultJsonValueMaker;
    getAllRows?: boolean;
}
declare class BaseContract {
    private api;
    private readonly baseName;
    constructor(api: ReadApi, tableCodeConfig: TableCodeConfig, name: string);
    get name(): string;
    getTableRows<ReturnType>({ scope, table, table_key, lower_bound, upper_bound, limit, key_type, index_position, parseMetaAsJson, parseKeysAsJson, defaultJsonValues, getAllRows, }: TableRowsArgs, prependResult?: ReturnType[]): Promise<TableResult<ReturnType>>;
    getSingleTableRow<ReturnType>(args: TableRowsArgs): Promise<ReturnType>;
}
export default BaseContract;
//# sourceMappingURL=base.d.ts.map