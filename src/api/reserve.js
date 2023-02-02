export default async function formHandler(req, res) {
  
  const sgMail = require('@sendgrid/mail');
  sgMail.setApiKey(process.env.SENDGRID_APIKEY);

  const { method, body } = req;

  const mailData = {
    from: 'hakusingo@gmail.com',
    to: `${body.formEmail}`,
    bcc: 'hakusingo@gmail.com',
    subject: 'ワンオーシャンへのご予約ありがとうございます。',
    html: 
    `<p>以下の内容でご予約を受け付けました。回答をお待ちください。<br>
    １営業日中に折り返しご連絡差し上げます、ご連絡がない場合はお手数ですがお電話でのご連絡をお願いいたします。
    ワンオーシャン代表 徳門</p>
    <hr>
    <p>ツアー内容: ${body.menu}</p>
    <p>第一希望日時: ${body.date1} ${body.time1}</p>
    <p>第二希望日時: ${body.date2} ${body.time2}</p>
    <p>第三希房日時: ${body.date3} ${body.time2}</p>
    <p>代表者様のお名前: ${body.formName}</p>
    <p>フリガナ名: ${body.furigana}</p>
    <p>メールアドレス: ${body.formEmail}</p>
    <p>お電話番号: ${body.phone}</p>
    <p>参加人数: 大人${body.adalt}名 お子様${body.child}名<p>

    <p>健康面での不安: ${body.anxiety}</p>
    <p>健康面の不安内容: ${body.anxietyText}</p>
    <p>宿泊先: ${body.stayPlace}</p>
    <p>沖縄到着日: ${body.arrival}</p>
    <p>沖縄からお帰りなる日: ${body.Departure}</p>
    <p>ワンオーシャンをお知りになった媒体: ${body.how}</p>
    <p>媒体の内容: ${body.howContent}</p>
    <p style="white-space: pre-wrap;">お問合わせ内容： ${body.reserveMessage}</p>
    <p>注意事項に同意する チェック有り</p>`,
  }

  const responses = sgMail.send(mailData)
    .then(
      responses => res.status(200).json(JSON.stringify(responses))
    )
    .catch(
      error => res.status(500).json(JSON.stringify(error))
    )

}