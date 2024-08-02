import * as chai from "chai";
import cjs from "chai-json-schema-ajv";
import axios from "axios";
import {putSchema } from "./schema/test.schema.js";

const expect = chai.expect;
chai.use(cjs);

describe('Post', function()  {
    it('PUT', async function () {
      //END POINT
      const res = await axios.put('https://jsonplaceholder.typicode.com/posts/1');

      //ASSERTION
      expect(res.status).to.be.equal(200);
      expect(res.data.id).to.be.equal(1);

      //SCHEMA
      expect(res.data).to.be.jsonSchema(putSchema);
    });
});
