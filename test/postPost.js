import * as chai from "chai";
import cjs from "chai-json-schema-ajv";
import axios from "axios";
import { singlePostSchema } from "./schema/test.schema.js";

const expect = chai.expect;
chai.use(cjs);

describe('Post', function()  {
    it('POST', async function () {
      //END POINT
      const res = await axios.post('https://jsonplaceholder.typicode.com/posts');

      //ASSERTION
      expect(res.status).to.be.equal(201);
      expect(res.data.id).to.be.equal(101);

      //SCHEMA
      expect(res.data).to.be.jsonSchema(singlePostSchema);
  });
});
