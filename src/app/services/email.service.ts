import { Injectable } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

export interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  // EmailJS configuration - Replace these with your actual values
  private readonly PUBLIC_KEY = '3bqUUscaQPPfmJiV4';
  private readonly SERVICE_ID = 'service_piin6n8';
  private readonly TEMPLATE_ID = 'template_xjherfm';

  constructor() {
    // Initialize EmailJS with your public key
    emailjs.init(this.PUBLIC_KEY);
  }

  async sendEmail(emailData: EmailData): Promise<EmailJSResponseStatus> {
    const templateParams = {
      from_name: emailData.name,
      from_email: emailData.email,
      subject: emailData.subject,
      message: emailData.message,
      to_name: 'Sujitkumar Borse',
      reply_to: emailData.email
    };

    return await emailjs.send(
      this.SERVICE_ID,
      this.TEMPLATE_ID,
      templateParams
    );
  }
}
