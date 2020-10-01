module.exports = (req, res) => {
  const sgMail = require('@sendgrid/mail');
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const { body } = req

  const msg = {
    to: 'tiago@clarific.com.br',
    from: 'no-reply@transpmachado.com.br',
    replyTo: `${body.email}`,
    subject: `Contato via website [${body.subject}]`,
    text: 'Você recebeu um contato via website',
    html: `<strong>Nome:</strong> ${body.name} <br /><strong>Email:</strong> ${body.email} <br /><strong>Fone:</strong> ${body.phone} <br /><strong>Mensagem:</strong> ${body.text}`,
  };

  (async () => {
    try {
      await sgMail.send(msg);
      res.status(200).json({ message: 'E-mail enviado com sucesso.' })
    } catch (error) {
      console.error(error);
      res.status(502).json({ error: error.toString() })
      if (error.response) {
        console.error(error.response.body)
      }
    }
  })();
}