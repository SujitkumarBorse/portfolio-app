import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  downloadResume(): void {
    const link = document.createElement('a');
    link.href = 'assets/Sujitkumar_Borse_Resume.pdf';
    link.download = 'Sujitkumar_Borse_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

}
