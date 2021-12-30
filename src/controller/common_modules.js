/* eslint-disable no-console */
import os from 'os';
import path from 'path';
import { unlink } from 'fs/promises';
// import { unlink, unlinkSync } from 'fs';

const osModule = (req, res) => {
  console.log('architecture', os.arch());
  console.log('platform', os.platform());
  console.log('temp directory', os.tmpdir());
  res.end('check console');
};

const pathModule = (req, res) => {
  console.log('return full path in linux and base name in windows', path.basename('C:\\temp\\myfile.html'));
  console.log('return only name', path.win32.basename('C:\\temp\\myfile.html'));

  /**
   * \ on Windows
   * / on POSIX
   */
  console.log('path separator', path.sep);

  /**
   * ; on Windows
   * : on POSIX
   */
  console.log('env paths', process.env.PATH);
  console.log('env paths separate by delimiter depends on OS', process.env.PATH.split(path.delimiter));

  console.log('resolve =>', path.resolve('/foo', '/bar', 'baz'));
  res.end('check console');
};

const fsModule = async (req, res) => {
  const filePath = path.resolve(__dirname, '../../output/hello');
  try {
    await unlink(filePath);
    console.log('successfully deleted /tmp/hello with promise based');
  } catch (error) {
    console.error('there was an error with promise based :', error.message);
  }

  // unlink(filePath, (err) => {
  //   if (err) throw err;
  //   console.log('successfully deleted /tmp/hello with callback');
  // });

  // try {
  //   unlinkSync(filePath);
  //   console.log('successfully deleted /tmp/hello with sync');
  // } catch (err) {
  //   // handle the error
  //   console.log('successfully deleted /tmp/hello with sync :', err.message);
  // }

  res.end('check console');
};

const dateModule = (req, res) => {
  const date1 = new Date('August 19, 1975 23:15:30 GMT+07:00');
  const date2 = new Date('August 19, 1975 23:16:30 GMT-02:00');

  console.log(date1.getTimezoneOffset());
  console.log(date2.getTimezoneOffset());
  // expected output: your local timezone offset in minutes
  // (eg -120). NOT the timezone offset of the date object.

  console.log(date1.getTimezoneOffset() === date2.getTimezoneOffset());
  // expected output: true
  console.log(111, date1, date2);
  res.end('check console');
};

export {
  osModule,
  pathModule,
  fsModule,
  dateModule,
};
