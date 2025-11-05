function fakePost(data){
      return new Promise(res=>setTimeout(()=>res({ok:true}),700));
    }
    function submitContact(){
      const n=document.getElementById('name').value.trim();
      const e=document.getElementById('email').value.trim();
      const m=document.getElementById('message').value.trim();
      const r=document.getElementById('contactResult');
      if(!n||!e){r.textContent='Please provide name and email.';return}
      r.textContent='Sending...';
      fakePost({n,e,m}).then(()=>{r.textContent='Thanks — we will contact you soon.';document.getElementById('contactForm').reset()});
    }
    function submitInvestor(){
      const n=document.getElementById('invName').value.trim();
      const e=document.getElementById('invEmail').value.trim();
      const t=document.getElementById('invTier').value;
      const r=document.getElementById('invResult');
      if(!n||!e){r.textContent='Please fill organisation and email.';return}
      r.textContent='Submitting...';
      fakePost({n,e,t}).then(()=>{r.textContent='Interest submitted. Thank you.';document.getElementById('invName').value='';document.getElementById('invEmail').value=''})
    }