import * as chai from "chai";
import cjs from "chai-json-schema-ajv";
import axios from "axios";
import {singleGetSchema } from "./schema/test.schema.js";

const expect = chai.expect;
chai.use(cjs);

describe('Post', function()  {
    it('GET', async function () {
        //END POINT
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts');

        //ASSERTION
        expect(res.status).to.be.equal(200);

        //SCHEMA
        expect(res.data).to.be.jsonSchema(singleGetSchema);
    });
});
