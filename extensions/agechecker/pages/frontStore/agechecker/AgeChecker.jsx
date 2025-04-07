import { Field } from "@components/common/form/Field";
import { Form } from "@components/common/form/Form";
import { OK } from "@evershop/evershop/src/lib/util/httpStatus";

import React from "react";

export default function Ageform({action, homepage, agefailurepage}) {
    return (<div className="page-width p-2">
        <Form action={action} id="age-form" onSuccess={ (response) => {
            if(!response.error) {
                if(response.data.passed) {
                    window.location.href = homepage;
                } else {
                    window.location.href = agefailurepage;
                }
            } else {
                window.location.href = agefailurepage;
            }
        }}
        >
            <div className="text-center">
                <p align="center">
                    <h1 align="center">Age Verification</h1>
                </p>
            </div>
            <div className="form-group">
                <Field 
                type="text"
                name="age"
                placeHolder="Enter your Age"
                validationRules={["notEmpty"]}
                />
            </div>
        </Form>
    </div>
    );
}

export const layout = {
    areaId : "content",
    sortOrder : 1,
}

// ageverify is the name of the folder of the middleware 
export const query = `
    query Query {
         action : url(routeId:  "ageverify"),
         agefailurepage : url(routeId: "ageverifyfailed"),
         homepage : url(routeId: "homepage")
    }
    `;
