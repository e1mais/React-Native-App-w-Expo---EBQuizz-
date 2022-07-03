
export default async function fetchingQuestions () {
  const URL ='http://192.168.0.8:3000/'

  try{
    const res = await fetch(URL)
    const data = await res.json()

    return data
  }catch(err){
    console.error(err)
  }
  finally{
    console.info('questions returned')
  }
}

 