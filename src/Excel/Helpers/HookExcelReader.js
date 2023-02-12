import React, { useEffect, useState } from 'react';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import XLSX from 'xlsx';
import { make_cols } from './MakeColumns';
import { SheetJSFT } from './types';

const HookExcelReader = () => {

    const [listNames, setListNames] = useState({
        listOneKey:'listOne',
        listTwoKey:'listTwo'
    })

    const {listOneKey, listTwoKey} = listNames;


    const [display, setDisplay] = useState({
        display: false,
        message: 'Display'
    })

    const [data, setData] = useState({

        file: {},
        data: [],
        cols: []
    })
    
    const [dataUploaded, setDataUploaded] = useState({
        listOne: [],
        listTwo: [],
    })

    const {listOne, listTwo} = dataUploaded

    const [dataCounted, setDataCounted] = useState({
        equal: {},
        notEqual: {},
        missingInListTwoFromListOne:{},
        missingInListOneFromListTwo:{}
    })

    const {equal, notEqual, missingInListTwoFromListOne, missingInListOneFromListTwo} = dataCounted

    useEffect(() => {
        handleFile();
      },[data]);

   const handleChange = (e) => {
        const files = e.target.files;
        if (files && files[0]) setData({...data, file: files[0] });        
    }
   
    const handleFile = (e) => {
       
        try {
            
            const reader = new FileReader();
        const rABS = !!reader.readAsBinaryString;
 
        reader.onload = (e) => {
        
            const bstr = e.target.result;
            const wb = XLSX.read(bstr, { type: rABS ? 'binary' : 'array', bookVBA : true });
            
            const wsname = wb.SheetNames[0];
            const ws = wb.Sheets[wsname];
            
            const dataReaded = XLSX.utils.sheet_to_json(ws);    
                        
            setData( { ...data, data: dataReaded, cols: make_cols(ws['!ref']) } );  

            handleCountData();
        };
        
        if (rABS) {
            reader.readAsBinaryString(data.file);       
        } else {
            reader.readAsArrayBuffer(data.file);
        };

        } catch (error) {
            console.log(error);
        }
        
         
    }

    const handleCountData = () => {

        let listOne = [];
        let listTwo = []
        data.data.forEach(element => {
            listOne.push(element[listOneKey])
            listTwo.push(element[listTwoKey])
        });

        setDataUploaded({...dataUploaded,
            listOne:listOne,
            listTwo: listTwo
        })

        listOne = listOne.filter(x => x != undefined)
        listTwo = listTwo.filter(x => x != undefined)

        listOne = listOne.reduce((prev, cur) => ((prev[cur] = prev[cur] + 1 || 1), prev), {})
        listTwo = listTwo.reduce((prev, cur) => ((prev[cur] = prev[cur] + 1 || 1), prev), {})

        listOne = Object
        .entries(listOne)
        .sort((a, b) => a[1] - b[1])
        .reduce((_sortedObj, [k,v]) => ({
          ..._sortedObj, 
          [k]: v
        }), {})

        listTwo = Object
        .entries(listTwo)
        .sort((a, b) => a[1] - b[1])
        .reduce((_sortedObj, [k,v]) => ({
          ..._sortedObj, 
          [k]: v
        }), {})

        let missingInListTwoFromListOne = [];
        let missingInListOneFromListTwo = [];
        let notEqual = []
        let equal = []
        let notEqualResult = []
        let equalResult = []

        Object.keys(listOne).forEach(element => {
            
            if(!listTwo[element]){
                missingInListTwoFromListOne.push(element)
            }

            if(listOne[element] && listTwo[element] && (listOne[element] != listTwo[element])){
                notEqual.push(element)
            }

            if(listOne[element] && listTwo[element] && (listOne[element] == listTwo[element])){
                equal.push(element)
            }

        });

        Object.keys(listTwo).forEach(element => {
            
            if(!listOne[element]){
                missingInListOneFromListTwo.push(element)
            }
        });


        notEqual.forEach(element => {
            notEqualResult.push({
                key:element,
                amountListOne: listOne[element],
                amountListTwo: listTwo[element],
            })
        });

        equal.forEach(element => {
            equalResult.push({
                key:element,
                amountListOne: listOne[element],
                amountListTwo: listTwo[element],
            })
        });

        setDataCounted({...dataCounted, 
                            equal: equalResult, 
                            notEqual: notEqualResult, 
                            missingInListTwoFromListOne: missingInListTwoFromListOne,
                            missingInListOneFromListTwo: missingInListOneFromListTwo 
                        });

    }

    // const handleCountData = () => {

    //     let listOne = [];
    //     let listTwo = []
    //     data.data.forEach(element => {
    //         listOne.push(element.listOne)
    //         listTwo.push(element.listTwo)
    //     });

    //     setDataUploaded({...dataUploaded,
    //         listOne:listOne,
    //         listTwo: listTwo
    //     })

    //     listOne = listOne.filter(x => x != undefined)
    //     listTwo = listTwo.filter(x => x != undefined)

    //     listOne = listOne.reduce((prev, cur) => ((prev[cur] = prev[cur] + 1 || 1), prev), {})
    //     listTwo = listTwo.reduce((prev, cur) => ((prev[cur] = prev[cur] + 1 || 1), prev), {})

    //     listOne = Object
    //     .entries(listOne)
    //     .sort((a, b) => a[1] - b[1])
    //     .reduce((_sortedObj, [k,v]) => ({
    //       ..._sortedObj, 
    //       [k]: v
    //     }), {})

    //     listTwo = Object
    //     .entries(listTwo)
    //     .sort((a, b) => a[1] - b[1])
    //     .reduce((_sortedObj, [k,v]) => ({
    //       ..._sortedObj, 
    //       [k]: v
    //     }), {})

    //     let missingInListTwoFromListOne = [];
    //     let missingInListOneFromListTwo = [];
    //     let notEqual = []
    //     let equal = []
    //     let notEqualResult = []
    //     let equalResult = []

    //     Object.keys(listOne).forEach(element => {
            
    //         if(!listTwo[element]){
    //             missingInListTwoFromListOne.push(element)
    //         }

    //         if(listOne[element] && listTwo[element] && (listOne[element] != listTwo[element])){
    //             notEqual.push(element)
    //         }

    //         if(listOne[element] && listTwo[element] && (listOne[element] == listTwo[element])){
    //             equal.push(element)
    //         }

    //     });

    //     Object.keys(listTwo).forEach(element => {
            
    //         if(!listOne[element]){
    //             missingInListOneFromListTwo.push(element)
    //         }
    //     });


    //     notEqual.forEach(element => {
    //         notEqualResult.push({
    //             key:element,
    //             amountListOne: listOne[element],
    //             amountListTwo: listTwo[element],
    //         })
    //     });

    //     equal.forEach(element => {
    //         equalResult.push({
    //             key:element,
    //             amountListOne: listOne[element],
    //             amountListTwo: listTwo[element],
    //         })
    //     });

    //     setDataCounted({...dataCounted, 
    //                         equal: equalResult, 
    //                         notEqual: notEqualResult, 
    //                         missingInListTwoFromListOne: missingInListTwoFromListOne,
    //                         missingInListOneFromListTwo: missingInListOneFromListTwo 
    //                     });

    // }

    return (
        <div className='ml-5'>
            <h1 className='mt-5'>Count values between lists </h1>
            <p>The file must cointains two lists named  <strong>listOne</strong> and <strong>listTwo</strong></p>
            <div className='d-flex '>
                <div className='col-lg-4'>
                    <input type="file" className="form-control" id="file" accept={SheetJSFT} onChange={handleChange} />
                </div>

                
            </div>

            <div className='mt-5 d-none'>
                <p className=''>
                    <label>List One</label>
                    <input type="text" className="form-control col-lg-2" value={listOneKey} onChange={(e) => setListNames({...listNames,listOneKey:e.target.value })} />
                </p>
                <p className='mt-2'>
                    <label>List Two</label>
                    <input type="text" className="form-control col-lg-2" value={listTwoKey} onChange={(e) => setListNames({...listNames,listTwoKey:e.target.value })}/>
                </p>
            </div>

            <div className='col-lg-12 mt-5'>
                <h3 className='mt-5 mb-3'>Uploaded Items</h3>
                <button className='btn btn-info' onClick={() => setDisplay({...display, display: !display.display, message: !display.display ? 'Hide' : 'Display' })}>{display.message}</button>
                
                {display.display &&

                    <div className='row'>
                    <div className='col-lg-5  text-center'>
                        <h4>List One</h4>
                        <table className="table table-striped table-bordered">
                        <thead>
                            <tr className='text-center '>
                                <th scope="col">Key</th>
                            </tr>
                        </thead>
                            <tbody>
                                {listOne.length > 0 ?
                                    listOne.map((e, i) => (
                                        <tr className='text-center'>
                                            <td>{e}</td>
                                        </tr>
                                    )) : <tr></tr>
                                }
                            </tbody>
                        </table>

                    </div>

                    <div className='col-lg-5  text-center'>
                        <h4>List One</h4>
                        <table className="table table-striped table-bordered">
                        <thead>
                            <tr className='text-center '>
                                <th scope="col">Key</th>
                            </tr>
                        </thead>
                            <tbody>
                                {listTwo.length > 0 ?
                                    listTwo.map((e, i) => (
                                        <tr className='text-center'>
                                            <td>{e}</td>
                                        </tr>
                                    )) : <tr></tr>
                                }
                            </tbody>
                        </table>
                    </div>
                    </div>
                }
                
            </div>

            <div className='col-lg-12  mt-5 mb-5'>
                <h3>Summary</h3>
                <div className='row'>
                    <div className='col-lg-5 text-center'>
                        <h3>Result</h3>
                        <table className="table table-striped table-bordered">
                        <thead>
                            <tr className='text-center '>
                                <th scope="col">Key</th>
                                <th scope="col">Amount List One</th>
                                <th scope="col">Amount List Two</th>
                            </tr>
                        </thead>
                            <tbody>
                                {notEqual.length > 0 ?
                                    notEqual.map((e, i) => (
                                        <tr className='text-center text-danger'>
                                            <td>{e.key}</td>
                                            <td>{e.amountListOne}</td>
                                            <td>{e.amountListTwo}</td>
                                        </tr>
                                    )) : <tr><td  colSpan={3}>No data found</td></tr>
                                }

                                {equal.length > 0 ?
                                    equal.map((e, i) => (
                                        <tr className='text-center  text-success'>
                                            <td>{e.key}</td>
                                            <td>{e.amountListOne}</td>
                                            <td>{e.amountListTwo}</td>
                                        </tr>
                                    )) : ''
                                }
                            </tbody>
                        </table>
                    </div>

                    <div className='col-lg-3  text-center'>
                        <h3>Missing in List Two (from List one)</h3>
                        <table className="table table-striped table-bordered">
                        <thead>
                            <tr className='text-center '>
                                <th scope="col">Key</th>
                            </tr>
                        </thead>
                            <tbody>
                                {missingInListTwoFromListOne.length > 0 ?
                                    missingInListTwoFromListOne.map((e, i) => (
                                        <tr className='text-center text-danger'>
                                            <td>{e}</td>
                                        </tr>
                                    )) : <tr><td>no data found</td></tr>
                                }
                            </tbody>
                        </table>
                    </div>

                    <div className='col-lg-3  text-center ml-3'>
                        <h3>Missing in List One (From list Two)</h3>
                        <table className="table table-striped table-bordered">
                        <thead>
                            <tr className='text-center '>
                                <th scope="col">Key</th>
                            </tr>
                        </thead>
                            <tbody>
                                {missingInListOneFromListTwo.length > 0 ?
                                    missingInListOneFromListTwo.map((e, i) => (
                                        <tr className='text-center text-danger'>
                                            <td>{e}</td>
                                        </tr>
                                    )) : <tr><td>No data found</td></tr>
                                }
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HookExcelReader
