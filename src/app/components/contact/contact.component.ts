import { Component, OnInit, OnDestroy } from '@angular/core';
import { ThemeService, Theme } from '../../services/theme.service';
import { EmailService, EmailData } from '../../services/email.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, OnDestroy {
  currentTheme: Theme = 'light';
  private themeSubscription: Subscription;
  
  // Form data
  contactForm: EmailData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  // Form state
  isSubmitting = false;
  submitMessage = '';
  submitSuccess = false;

  constructor(
    private themeService: ThemeService,
    private emailService: EmailService
  ) {
    this.themeSubscription = this.themeService.theme$.subscribe(theme => {
      this.currentTheme = theme;
    });
  }

  ngOnInit(): void {
    this.currentTheme = this.themeService.getCurrentTheme();
  }

  ngOnDestroy(): void {
    if (this.themeSubscription) {
      this.themeSubscription.unsubscribe();
    }
  }

  // Form submission method
  async onSubmit(): Promise<void> {
    if (!this.isFormValid()) {
      this.submitMessage = 'Please fill in all required fields.';
      this.submitSuccess = false;
      return;
    }

    this.isSubmitting = true;
    this.submitMessage = '';

    try {
      const response = await this.emailService.sendEmail(this.contactForm);

      // console.log('Email sent successfully:', response);
      this.submitMessage = 'Thank you! Your message has been sent successfully.';
      this.submitSuccess = true;
      this.resetForm();

    } catch (error) {
      console.error('Email sending failed:', error);
      this.submitMessage = 'Sorry, there was an error sending your message. Please try again or contact me directly.';
      this.submitSuccess = false;
    } finally {
      this.isSubmitting = false;
      
      // Clear the message after 5 seconds
      setTimeout(() => {
        this.submitMessage = '';
      }, 5000);
    }
  }

  // Form validation
  private isFormValid(): boolean {
    return !!(
      this.contactForm.name.trim() &&
      this.contactForm.email.trim() &&
      this.contactForm.subject.trim() &&
      this.contactForm.message.trim() &&
      this.isValidEmail(this.contactForm.email)
    );
  }

  // Email validation
  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Reset form
  private resetForm(): void {
    this.contactForm = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }
}
