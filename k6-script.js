import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
    vus: 3,
    duration: '10s',
  };

export default function() {
  var payload = JSON.stringify({
    'id':'fake_id',
    'name': 'xyz',
    'age': 5,
    'address': 'addressxyz'
  });

  var params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  var host = 'http://127.0.0.1:3000';
  var res = http.post(host + '/patients', payload, params);
  console.log("POST: " + JSON.stringify(res));
  var id = JSON.parse(res.body).PatientId;


  res = http.get(host + '/patients/' + id);
  console.log("GET: " + JSON.stringify(res));


  payload = JSON.stringify({
    'id':'fake_id',
    'name': 'xyz_updated',
    'age': 10,
    'address': 'addressxyz_updated'
  });

  res = http.put(host + '/patients', payload, params);
  //console.log("PUT: " + JSON.stringify(res));

  res = http.get(host + '/patients/' + id);
  //console.log("GET: " + JSON.stringify(res));

  res = http.get(host + '/patients');
  //console.log("OPTIONS: " + JSON.stringify(res));

  res = http.get(host + '/patients/' + id);
  //console.log("GET: " + JSON.stringify(res));

  res = http.del(host + '/patients/' + id);
  //console.log("DELETE: " + JSON.stringify(res));

  // Should fail
  res = http.get(host + '/patients/' + id);
  //console.log("GET: " + JSON.stringify(res));

  // Should fail
  res = http.put(host + '/patients', payload, params);
  //console.log("PUT: " + JSON.stringify(res));

}
