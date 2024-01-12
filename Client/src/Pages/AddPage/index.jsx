import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import FormAdd from '../../Components/FormAdd'

const AddPage = () => {

    

    return (
        <div>
            <Helmet>
                <title>Add Page</title>
            </Helmet>
            
            <FormAdd/>
            
        </div>
    )
}

export default AddPage
