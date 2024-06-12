const ActiveDirectory = require('activedirectory2');

const config = {
    url: 'ldap://192.168.2.83',  // Replace with your AD server URL
    baseDN: 'dc=wemsol,dc=local', // Replace with your AD domain
    username: 'ims',      // Replace with a username that has read access
    password: '******',      // Replace with the password for the specified username
	tlsOptions: {
        requestCert: false,
        rejectUnauthorized: false,
    }
  };
  
  // Create an ActiveDirectory object
  const ad = new ActiveDirectory(config);
  console.log("AD connection.................");
  console.log(ad);
  
  // other users 
  const user_name = 'xyz';
  const user_password = '************';
	ad.authenticate(user_name, user_password, (err, auth) => {
		if (err) {
			console.log('Error authenticating against Active Directory:', err);
		} else {
			if (auth) {
				console.log('Authenticated successfully against Active Directory');
			} else {
				console.log('Authentication failed against Active Directory');
			}
		}
	});