 
export const parseRequestUrl = () => {
  
  const path = location.hash.slice(2).toLowerCase() || '/';

   
  const params = path.split('/');
 
  const request = {
    resource: params[0] || null,
    id: params[1] || null,
    verb: params[2] || null
  };
 
  console.log('(App) Parsed url:', request);
 
  return request;
};
