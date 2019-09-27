export default function() {
  return Promise.resolve({
    json: () => 
    Promise.resolve(
      {items: 
        [
        { repo: 'test'},
        { repo: 'newtest' }
        ]
      }
    )
  });
};