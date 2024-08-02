import * as chai from "chai";
import cjs from "chai-json-schema-ajv";
import axios from "axios";

const expect = chai.expect;
chai.use(cjs);

describe('Post', function()  {
    it('DELETE', async function () {
      //END POINT
      const res = await axios.delete('https://jsonplaceholder.typicode.com/posts/1');

      //ASSERTION
      expect(res.status).to.be.equal(200);

      //SCHEMA

    });
});
