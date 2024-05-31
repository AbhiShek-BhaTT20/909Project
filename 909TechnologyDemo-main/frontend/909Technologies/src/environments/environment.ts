const HOSTNAME: string = "localhost";
const PORT_NUMBER: number = 8765;
const APPLICATION_NAME: string = '/Project909';

export const environment = {
  production: false,
  employeeAPIUrl: 'http://' + HOSTNAME + ':' + PORT_NUMBER + APPLICATION_NAME + '/api',
  employeeDetailsbyIdAPI:'http://' + HOSTNAME + ':' + PORT_NUMBER + APPLICATION_NAME + '/api',
  employeeDetailsAPI: 'http://' + HOSTNAME + ':' + PORT_NUMBER + APPLICATION_NAME + '/api',
  updateEmployeeDetails:'http://' +HOSTNAME +':' +PORT_NUMBER+APPLICATION_NAME +'/api',
  deleteEmployeeDetails:'http://'+HOSTNAME+':'+PORT_NUMBER+APPLICATION_NAME+'/api',
  filterEmployee:'http://'+HOSTNAME+':'+PORT_NUMBER+APPLICATION_NAME+'/api'
};