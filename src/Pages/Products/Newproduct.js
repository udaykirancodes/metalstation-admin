import React, { useContext, useEffect, useState } from 'react'
import Select from 'react-select';
import './newProduct.css'

import { AddProductUrl } from '../../urls';
import { useNavigate } from 'react-router-dom';
import Context from '../../context/Context';
// import ImagePreview from '../../components/ImagePreview';


const Newproduct = (props) => {


    // Image Preiview start 
    const [selectedImages, setSelectedImages] = useState([]);

    const { products, setproducts } = useContext(Context);

    const [final, setFinal] = useState([]);

    useEffect(() => {
        console.log(final);
    }, [final])

    const onSelectFile = (event) => {
        // setFinal(event.target.files);
        console.log(event.target.files);
        const selectedFiles = event.target.files;




        const selectedFilesArray = Array.from(selectedFiles);

        const imagesArray = selectedFilesArray.map((file) => {
            return URL.createObjectURL(file);
        });
        setFinal(selectedFilesArray);
        setSelectedImages((previousImages) => previousImages.concat(imagesArray));

        // FOR BUG IN CHROME
        event.target.value = "";
    };

    function deleteHandler(image) {
        setSelectedImages(selectedImages.filter((e) => e !== image));
        URL.revokeObjectURL(image);
    }
    const uploadFiles = () => {

    }

    // Image Preiview End 

    const navigate = useNavigate();
    const { showAlert } = props;

    useEffect(() => {
        showAlert('Yes, You can add products here :)', 'success');
    }, []);


    const [state, setState] = useState('')
    const [subcategories, setsubcategories] = useState([]);

    // const handleChange = selectedOption => {
    //     setState({ selectedOption });
    //     let subCategory = selectedOption.map(element => {
    //         return element.value
    //     })
    //     setsubcategories(subCategory);
    // };
    const { selectedOption } = state;


    const [input, setInput] = useState({
        name: '',
        category: '',
        shortDescription: '',
        description: '',
        height: '',
        width: '',
        length: '',
        weight: '',
        subCategory: '',
        color: '',
        price: null,
        minPrice: null,
        maxPrice: null,
        isFeatured: false,
    });
    const [input2, setInput2] = useState({});
    // const [images , setSelectedImages ] = useState(); 

    const handleInput = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
        console.log(input)
    }


    const AddProduct = () => {
        console.log(typeof (input.price))
        let form = new FormData();
        form.append('name', input.name);
        form.append('category', input.category);
        form.append('description', input.description);
        form.append('shortDescription', input.shortDescription);
        if (input.price) {
            form.append('price', input.price);
        }
        if (input.minPrice && input.maxPrice) {
            form.append('minPrice', input.minPrice);
            form.append('maxPrice', input.maxPrice);
        }
        form.append('heigth', input.height);
        form.append('width', input.width);
        form.append('length', input.length);
        form.append('weight', input.weight);
        form.append('color', input.color);
        form.append('subCategory', input.subCategory);
        form.append('isFeatured', input.isFeatured);
        form.append('table', JSON.stringify(serviceList));
        // appending images 
        if (final) {
            for (const file of final) {
                form.append('images', file, file.name);
            };
        }
        let adminToken = localStorage.getItem('adminToken');
        if (!adminToken) {
            navigate('/login');
        }
        fetch(AddProductUrl, {
            method: "POST",
            headers: {
                'adminToken': adminToken,
                'boundary': 'MyBoundary'
            },
            body: form
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                if (data.success === true) {
                    setproducts(products.concat(data.data))
                    showAlert("Product Added Successfully ", "success");
                    navigate('/product');
                }
                else {
                    showAlert(data.msg, "danger");
                }
            })
    }

    const [serviceList, setServiceList] = useState([{ fieldName: "" }]);

    const handleServiceChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...serviceList];
        list[index][name] = value;
        setServiceList(list);
    };

    const handleServiceRemove = (index) => {
        const list = [...serviceList];
        list.splice(index, 1);
        setServiceList(list);
    };

    const handleServiceAdd = () => {
        setServiceList([...serviceList, { fieldName: "" }]);
        // setLabel(input.service);
    };


    const [serviceList2, setServiceList2] = useState([{ value: "" }]);

    const handleServiceChange2 = (e, index) => {
        const { name, value } = e.target;
        const list = [...serviceList];
        list[index][name] = value;
        setServiceList2(list);
    };



    const handleServiceRemove2 = (index) => {
        const list = [...serviceList2];
        list.splice(index, 1);
        setServiceList2(list);
    };

    const handleServiceAdd2 = () => {
        setServiceList2([...serviceList2, { service: "" }]);
        // setLabel(input.service);
    };
    const setFeatured = (e) => {
        if (e.target.checked) {
            setInput({ ...input, isFeatured: true })
        }
        console.log(input.isFeatured)
    }
    const setNotFeatured = (e) => {
        if (e.target.checked) {
            setInput({ ...input, isFeatured: false })
        }
        console.log(input.isFeatured)
    }
    useEffect(() => {
        console.log('Table : ', serviceList)
    }, [serviceList, serviceList2])
    return (
        <>
            {/* <!-- Modal --> */}
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Confirm Before adding New Product
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">No</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={AddProduct}>Yes</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="newProduct container" style={{ paddingTop: '5%' }}>
                <form className="row g-3">
                    <div className="col-md-6">
                        <label htmlFor="name" className="form-label">Name of the Product</label>
                        <input type="text" name='name' onChange={(e) => handleInput(e)} value={input.name} className="form-control" id="name" />
                    </div>
                    <div className="col-md-2">
                        <label htmlFor="category" className="form-label">Category</label>
                        <select id="category" className="form-select" name='category' onChange={(e) => handleInput(e)}>
                            <option value="">Choose...</option>
                            <option value="steel">Stell</option>
                            <option value="aluminium">Aluminium</option>
                            <option value="copper">Copper</option>
                            <option value="machinery">Machinery</option>
                            <option value="autoparts">Autoparts</option>
                        </select>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="subCategory" className="form-label">Sub Category</label>
                        <select id="subCategory" className="form-select" name='subCategory' onChange={(e) => handleInput(e)}>
                            <option value="">Choose...</option>
                            <option value="rod">Rod</option>
                            <option value="wire">Wire</option>
                            <option value="pipe">Pipe</option>
                            <option value="bar">Bar</option>
                        </select>
                    </div>
                    <div className="col-md-12">
                        <label htmlFor="shortDescription" className="form-label">Short Description</label>
                        <input type="text" name='shortDescription' value={input.shortDescription || ''} rows="10" onChange={(e) => handleInput(e)} className="form-control" id="shortDescription" />
                    </div>
                    <div className="form-group col-md-12">
                        <label htmlFor="exampleFormControlTextarea1">Product Description</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" name='description' onChange={(e) => handleInput(e)} value={input.description || ''} rows="3"></textarea>
                    </div>


                    <div className="col-md-2">
                        <label htmlFor="height" className="form-label">Height</label>
                        <input type="text" name='height' onChange={(e) => handleInput(e)} className="form-control" id="height" />
                    </div>
                    <div className="col-md-2">
                        <label htmlFor="width" className="form-label">Width</label>
                        <input type="text" name='width' onChange={(e) => handleInput(e)} className="form-control" id="width" />
                    </div>
                    <div className="col-md-2">
                        <label htmlFor="length" className="form-label">Length</label>
                        <input type="text" name='length' onChange={(e) => handleInput(e)} className="form-control" id="length" />
                    </div>
                    <div className="col-md-2">
                        <label htmlFor="weight" className="form-label">Weight</label>
                        <input type="text" name='weight' onChange={(e) => handleInput(e)} className="form-control" id="weight" />
                    </div>
                    <div className="col-md-2">
                        <label htmlFor="color" className="form-label">Color</label>
                        <input type="text" name='color' onChange={(e) => handleInput(e)} className="form-control" id="color" />
                    </div>
                    <div className="col-md-2 flex-row-reverse">
                        <label htmlFor="feature" className="form-label">Feature Product</label>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" onChange={(e) => setFeatured(e)} name="isFeatured" id="flexRadioDefault1" />
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                Yes
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" onChange={(e) => setNotFeatured(e)} name="isFeatured" id="flexRadioDefault2" />
                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                No
                            </label>
                        </div>
                    </div>
                    <div className="col-md-2">
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="price" className="form-label">Price</label>
                        <input type="number" name='price' onChange={(e) => handleInput(e)} className="form-control" id="price" />
                    </div>
                    <div className="col-md-2">
                        {
                            // !input.price && 
                            <>
                                <label htmlFor="minPrice" className="form-label">Minimum Price</label>
                                <input type="number" name='minPrice' onChange={(e) => handleInput(e)} className="form-control" id="priceRange" />
                            </>
                        }
                    </div>
                    <div className="col-md-2">
                        {
                            // !input.price &&
                            <>
                                <label htmlFor="maxPrice" className="form-label">Minimum Price</label>
                                <input type="number" name='maxPrice' onChange={(e) => handleInput(e)} className="form-control" id="priceRange" />
                            </>
                        }
                    </div>
                    <div className="col-md-2">
                    </div>



                    <div className="col-md-4">
                        <label htmlFor="service">Table Input(s)</label>
                        {serviceList.map((singleService, index) => (
                            <div key={index} className="services">
                                <div className="first-division">
                                    <input
                                        className='form-control'
                                        name="fieldName"
                                        type="text"
                                        id="service"
                                        value={singleService.fieldName}
                                        onChange={(e) => handleServiceChange(e, index)}
                                        placeholder='table Header'
                                        required
                                    />
                                    <input
                                        className='form-control'
                                        name="value"
                                        type="text"
                                        id="service2"
                                        value={singleService.value}
                                        onChange={(e) => handleServiceChange2(e, index)}
                                        placeholder='table Content'
                                        required
                                    />
                                    {serviceList.length - 1 === index && serviceList.length < 10 && (
                                        <button
                                            type="button"
                                            onClick={handleServiceAdd}
                                            className="add-btn"
                                        >
                                            <span>Add Input</span>
                                        </button>
                                    )}
                                </div>
                                <div className="second-division">
                                    {serviceList.length !== 1 && (
                                        <button
                                            type="button"
                                            onClick={() => handleServiceRemove(index)}
                                            className="remove-btn"
                                        >
                                            <span>Remove</span>
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* <div className="mb-3">
                        <label htmlFor="formFileMultiple" className="form-label">Product Image</label>
                        <input className="form-control" type="file" id="formFileMultiple" onChange={(e) => { setSelectedImages(e.target.files) }} multiple accept=".jpeg,.jpg,.png" />
                    </div> */}
                    <div className="container">
                        <section className="ImagePreview">
                            <label className="ImageLabel">
                                + Add Images
                                <br />
                                <input
                                    type="file"
                                    name="images"
                                    onChange={onSelectFile}
                                    multiple
                                    accept="image/png , image/jpeg, image/webp, application/pdf"
                                    className="ImagePreviewInput"
                                />
                            </label>
                            <br />
                        </section>
                    </div>

                    {selectedImages.length === 0 ? "" :
                        <div className="images">
                            {selectedImages &&
                                selectedImages.map((image, index) => {
                                    return (
                                        <div key={image} className="image">
                                            <img className="preview" src={image}
                                                height={200}
                                                width={300}
                                                alt="upload" />
                                            <div className="ImgDelete">

                                                <button className="ImageDelete" onClick={() => deleteHandler(image)}>
                                                    x
                                                </button>
                                            </div>
                                            <p className="ImageP">{index + 1}</p>
                                        </div>
                                    );
                                })}
                        </div>
                    }


                    <button style={{ width: "60%", margin: '3rem auto' }} type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" >
                        Add
                    </button>
                </form>
            </div >
        </>
    )
}
export default Newproduct;