import React, { ReactNode, useState, ReactElement } from "react";
import { cn } from "../../../utils/utils";

export interface GridProps {
  data: any[];
  detail: (props: { dataItem: any }) => ReactNode;
  expandField: string | "";
  onExpandChange: (event: GridExpandChangeEvent) => void;
  children: ReactElement<GridColumnProps>[];
  style?: React.CSSProperties;
  className?: string;
}

export interface GridColumnProps {
  field: string;
  title: string;
  width?: string;
}

export interface GridExpandChangeEvent {
  dataIndex?: number;
  dataItem?: any;
  nativeEvent?: any;
  targe?: GridProps;
  value?: boolean;
}

// export const Column: React.FC<ColumnProps> = () => null;
export const GridColumn: React.FC<GridColumnProps> = ({
  field,
  title,
  width,
}) => {
  return (
    <React.Fragment>
      <th
        className="border-collapse overflow-hidden truncate border-x border-b px-3 py-2 text-left font-normal"
        style={{ width: width }}
      >
        {title}
      </th>
    </React.Fragment>
  );
};

export const Grid: React.FC<GridProps> = ({
  data,
  detail,
  expandField,
  onExpandChange,
  children,
  className,
  style,
  ...props
}) => {
  const renderHeader = (columns: ReactElement<GridColumnProps>[]) => {
    return (
      <React.Fragment>
        {expandField && <th className="min-w-10 border-b" />}
        {columns.map((column) => (
          <GridColumn
            key={column.props.field}
            field={column.props.field}
            title={column.props.title}
            width={column.props.width}
          />
        ))}
      </React.Fragment>
    );
  };

  const renderRows = (
    data: any[],
    columns: ReactElement<GridColumnProps>[],
  ) => {
    return data.map((item, index) => (
      <React.Fragment key={item.ProductID}>
        <tr
          className={`bg-white hover:bg-[#ECECEC] ${index % 2 !== 0 ? "bg-[#F6F6F6]" : "bg-[#FFFFFF]"}`}
        >
          <td className="px-3 py-4 text-center">
            <button
              onClick={() =>
                onExpandChange({
                  dataItem: item,
                  dataIndex: index,
                })
              }
              className="font-semibold text-[#424242]"
            >
              {(item as any)[expandField] ? "-" : "+"}
            </button>
          </td>
          {columns.map((column) => (
            <td key={column.props.field} className="border-x px-3 py-4">
              {(item as any)[column.props.field]}
            </td>
          ))}
        </tr>
        {(item as any)[expandField] && (
          <tr
            className={` ${index % 2 !== 0 ? "bg-[#F6F6F6]" : "bg-[#FFFFFF]"}`}
          >
            <td />
            <td
              colSpan={columns.length + 2}
              className={`px-4 py-2 ${index % 2 !== 0 ? "bg-[#F6F6F6]" : "bg-[#FFFFFF]"}`}
            >
              {detail({ dataItem: item })}
            </td>
          </tr>
        )}
      </React.Fragment>
    ));
  };

  return (
    <table
      className={cn(
        "mx-auto block w-fit border-collapse overflow-x-scroll overflow-y-scroll border text-sm",
        className,
      )}
      style={style}
      {...props}
    >
      <thead className="block md:table-header-group">
        <tr className="bg-gray-100">{renderHeader(children)}</tr>
      </thead>
      <tbody className="block md:table-row-group">
        {renderRows(data, children)}
      </tbody>
    </table>
  );
};
