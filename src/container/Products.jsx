import { List, Table, Column } from "react-virtualized";
import "react-virtualized/styles.css";
import '../App.css';

const data = Array.from({ length: 1000 }, (_, i) => ({
    id: i,
    name: `User ${i}`,
    age: 20 + (i % 10),
}));

function Products() {
    const rowRenderer = ({
        key, index, style
    }) => {
        const rowStyle = {
            ...style,
            // padding: "10px",
            backgroundColor: index % 2 === 0 ? "#f0f0f0" : "#ffffff", // Alternate row colors
            borderBottom: "1px solid #ddd",
            fontSize: "16px",
          };
        return (
            <div key={key}  className="row" style={rowStyle}>
                <label>product - {index + 1}</label>
            </div>
        )
    }

    return (
        <div className="products">
            <div>
                <h3>Table Content</h3>
                <List
                    width={600}
                    height={300}
                    rowCount={200}
                    rowHeight={20}
                    rowRenderer={rowRenderer}
                    className="list"
                />
            </div>
            <div>
                <h3>Table Content</h3>
                <Table
                    width={600}
                    height={400}
                    headerHeight={50}
                    rowHeight={40}
                    rowCount={data.length}
                    rowGetter={({ index }) => data[index]}
                >
                    <Column label="ID" dataKey="id" width={100} />
                    <Column label="Name" dataKey="name" width={300} />
                    <Column label="Age" dataKey="age" width={200} />
                </Table>
            </div>
        </div>
    );
}

export default Products;