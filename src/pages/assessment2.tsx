import React, { useState } from "react";
import products from "../../utils/products.json";
import { Grid, GridColumn, GridExpandChangeEvent } from "../components/Grid";
import { Product } from "../../utils/interfaces";
export default function Assessment2() {
  const [data, setData] = useState<Product[]>(products);

  const DetailComponent = ({ dataItem }: { dataItem: any }) => (
    <div className="space-y-5">
      <p>
        <strong>In Stock:</strong> {dataItem.ProductID}
      </p>
      <p>
        <strong>On Order:</strong> {dataItem.Category.CategoryName}
      </p>
      <p>
        <strong>Reorder Level:</strong> {dataItem.Category.CategoryName}
      </p>
      <p>
        <strong>Discontinued:</strong> {dataItem.Discontinued ? "No" : "Yes"}
      </p>
      <p>
        <strong>Category:</strong> {dataItem.Category.Description}
      </p>
    </div>
  );

  const expandChange = (event: GridExpandChangeEvent) => {
    let newData = data.map((item: Product) => {
      if (item.ProductID === event.dataItem.ProductID) {
        item.expanded = !event.dataItem.expanded;
      }
      return item;
    });
    setData(newData);
  };

  return (
    <div className="m-3 w-auto">
      <h2 className="mb-5 text-xl font-semibold">Assessment 2:</h2>
      <div>
        <Grid
          data={data}
          detail={DetailComponent}
          expandField="expanded"
          onExpandChange={expandChange}
          style={{ height: "500px" }}
        >
          <GridColumn field="ProductName" title="Product" width="300px" />
          <GridColumn field="ProductID" title="ID" width="50px" />
          <GridColumn field="UnitPrice" title="Unit Price" width="100px" />
          <GridColumn
            field="QuantityPerUnit"
            title="Qty Per Unit"
            width="20px"
          />
        </Grid>
      </div>
    </div>
  );
}
