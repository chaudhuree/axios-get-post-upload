// axios get request
import axios from 'axios';
axios.get('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  }); 

// axios post request
axios.post('https://jsonplaceholder.typicode.com/posts', {  
  title: 'foo',
  body: 'bar',
  userId: 1
})
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });

// axios file upload
const UploadData = new FormData();
UploadData.append('file0', "fileObj0");
UploadData.append('file1', "fileObj1");
const HeadersConfig= {
  headers:{
    'Content-Type': 'multipart/form-data'
  }
  
}

axios.post(URL, UploadData,HeadersConfig)
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  }
);  
