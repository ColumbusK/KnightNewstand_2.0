import axios from 'axios';

const client = axios.create({
  headers: {
    "Authorization": `Bearer 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`,
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  }
})

const translate = async (text) => {
  const prompt = `你是一位英语教师，请翻译以下段落，并讲解每个句子的语法点 \n ${text} \n 翻译：`
  const request = client.post('https://cdn.wswpass.com/PeVpYGxvy/v1/completions',
    {
      model: "text-davinci-003",
      prompt: `${prompt}`,
      temperature: 0.5,
      max_tokens: 3500,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    })
  return request.then((response) => {
    return response.data.choices[0].text
  })
}

export default translate