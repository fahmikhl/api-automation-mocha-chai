import { expect } from 'chai';
import axios from 'axios';
import Ajv from "ajv"
const ajv = new Ajv()
import * as schema from '../test/schema/post.schema.js';

describe('Post', function()  {
    it('POST', async function () {

        //END POINT
        const res = await axios.post('https://jsonplaceholder.typicode.com/posts');

        //ASSERTION
        expect(res.status).to.be.equal(201);
        expect(res.data.id).to.be.equal(101);
        // console.log(res.data.id);

        //SCHEMA
        const validate = ajv.compile(schema.SCHEMA_POST)
        expect(valid).to.be.true
    });
});
