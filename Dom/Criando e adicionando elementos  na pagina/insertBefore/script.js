  
  // Adicionando elementos

  const div = document.createElement('div');
  div.innerText = "olá devs"

  // InsertBefore
 const body = document.querySelector('body')
 const script = body.querySelector('script')

 body.insertBefore(div, script )
 
