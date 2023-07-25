import React, { useState } from 'react'
import Select from 'react-select'

const NewProduct = () => {
    const SingleOptions = [
        // { value: AddproductData.SelectColor, label: AddproductData.SelectColor },
        {
            value: "1",
            label: "White",
            price: "",
            discount: "",
            stock: "",
            code: "",
        },
        {
            value: "2",
            label: "Black",
            price: "",
            discount: "",
            stock: "",
            code: "",
        },
        {
            value: "3",
            label: "Violate",
            price: "",
            discount: "",
            stock: "",
            code: "",
        },
        { value: "4", label: "Grey", price: "", discount: "", stock: "", code: "" },
        { value: "5", label: "Red", price: "", discount: "", stock: "", code: "" },
        {
            value: "6",
            label: "Brown",
            price: "",
            discount: "",
            stock: "",
            code: "",
        },
        {
            value: "7",
            label: "Green",
            price: "",
            discount: "",
            stock: "",
            code: "",
        },
    ];
    const [selectedMulti2, setSelectedMulti2] = useState([])
    const [selectedMulti2_id, setSelectedMulti2_id] = useState(0);

    function handleMulti2(data) {
        // setSelectedMulti2_id(null);
        //  setSelectedMulti2([]);


        if (!data) {
            setSelectedMulti2([]);
            setSelectedMulti2_id(null);
        } else {
            setSelectedMulti2(data);
            setSelectedMulti2_id(data);
        }
    }
    const [selectedSize, setSelectedSize] = useState({
        allSize: [],
        res: []
    });
    const handleSize = (e) => {
        const { value, checked } = e.target;
        const { allSize } = selectedSize;

        console.log(`${value} is ${checked}`);

        if (checked) {
            setSelectedSize({
                allSize: [...allSize, value],
            });
        }
        else {
            console.log("e", e)
            setSelectedSize({
                allSize: allSize.filter((e) => e !== value),
            });
        }
    };
    console.log(selectedSize);


    const TableData2 = () => {
        return selectedMulti2.map((element, index) => {
            return (
                <div key={index}>

                    <div className="d-flex">
                        {console.log("id", index)}
                        <div style={{ marginRight: "10px" }}>
                            <input
                                type="checkbox"
                                className="form-check-input"
                                value="SM"
                                name="allSize"
                                onChange={handleSize}
                            />
                            <label className="form-check-label">SM</label>
                        </div>
                        <div style={{ marginRight: "10px" }}>
                            <input
                                type="checkbox"
                                className="form-check-input"
                                value="LG"
                                name="allSize"
                                onChange={handleSize}
                            />
                            <label className="form-check-label">LG</label>
                        </div>
                        <div style={{ marginRight: "10px" }}>
                            <input
                                type="checkbox"
                                className="form-check-input"
                                value="XL"
                                name="allSize"
                                onChange={handleSize}
                            />
                            <label className="form-check-label">XL</label>
                        </div>
                        <div style={{ marginRight: "10px" }}>
                            <input
                                type="checkbox"
                                className="form-check-input"
                                value="XXL"
                                onChange={(e) => handleSize(e)}
                            />
                            <label className="form-check-label">XXL</label>
                        </div>
                        <div style={{ marginRight: "10px" }}>
                            <input
                                type="checkbox"
                                className="form-check-input"
                                value="XXXL"
                                onChange={(e) => handleSize(e)}
                            />
                            <label className="form-check-label">XXXL</label>
                        </div>
                    </div>

                </div>
            );
        });
    };

    return (
        <div>
            <Select
                className="mb-3"
                value={selectedMulti2}
                // defaultValue={InitSelectedColor}
                isMulti={true}
                isClearable={true}
                onChange={(e) => {
                    handleMulti2(e);
                }}
                options={SingleOptions}
            />

            {
                TableData2()
            }
        </div>
    )
}

export default NewProduct