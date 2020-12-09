import { Request, Response } from 'express';
import mongoose from 'mongoose';
import nodemailer from 'nodemailer';

require('../models/Orcamento');
const Orcamento = mongoose.model('Orcamento');

export default {

  async create(request: Request, response: Response) {
    await Orcamento.create(request.body, (err) => {
      if (err) return response.status(400).json({
        error: true,
        message: 'Erro: Falha ao enviar solicitação de orçamento!'
      });
    });

    var transport = nodemailer.createTransport({
      host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "b8926573ecf024",
        pass: "0d61cdb3d2abd4"
      },
    });

    var emailHTML = 'Prezado(a) <br><br> Recebi a solicitação de orçamento.<br><br> Em breve te responderemos!<br><br>';

    var emailText = 'Prezado(a) \n\n Recebi a solicitação de orçamento.\n\n Em breve te responderemos!\n\n';

    var emailSendInfo = {
      from: '"Igor Santos 👻" <42d0c2bcb5-e31c9d@inbox.mailtrap.io>',
      to: request.body.email,
      subject: "Solicitação de Orçamento",
      text: emailText,
      html: emailHTML
    }

    await transport.sendMail(emailSendInfo, (err) => {
      if (err) return response.status(400).json({
        error: true,
        message: 'Erro: Falha ao enviar solicitação de orçamento!'
      });

      return response.json({
        error: false,
        message: 'Solicitação de Orçamento enviada com Sucesso!'
      });
    });

  }
}