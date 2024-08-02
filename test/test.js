// import { assert } from 'chai';  // Using Assert style
// import { expect } from 'chai';  // Using Expect style
// import { should } from 'chai';  // Using Should style
// const { expect } = require('chai');
import { expect } from 'chai';
import chai from 'chai';
import Ajv from 'ajv';
import axios from 'axios';
const ajv = new Ajv();

describe('Post', function()  {
    it('POST', async function () {

        //END POINT
        const res = await axios.post('https://jsonplaceholder.typicode.com/posts');

        //ASSERTION
        expect(res.status).to.be.equal(201);
        expect(res.data.id).to.be.equal(101);
        console.log(res.data.id);

        //SCHEMA

        
    });
});
