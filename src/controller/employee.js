import fetch from 'node-fetch';
import { createWriteStream } from 'fs';
import moment from 'moment';

async function fetchEmployee(req, res) {
  try {
    const { id } = req.params;
    const response = await fetch(`http://dummy.restapiexample.com/api/v1/employee/${id}`);
    if (response.status === 200 || response.status === '200') {
      const body = await response.json();
      const timestamp = moment().unix();
      const fileName = `${timestamp}_employee_${id}.txt`;
      const stream = createWriteStream(`output/${fileName}`);
      stream.once('open', () => {
        stream.write(JSON.stringify(body.data));
        stream.end();
      });
      res.send({
        msg: 'file created',
        file_name: fileName,
      });
    } else {
      res.status(400).send({
        msg: 'file not created',
        status: response.status,
      });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
}

export default fetchEmployee;
