import { Component, OnInit, HostListener } from '@angular/core';
import { ThemeService, Theme } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isScrolled = false;
  activeSection = 'home';
  isMobileMenuOpen = false;
  currentTheme: Theme = 'light';

  constructor(private themeService: ThemeService) {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
    this.updateActiveSection();
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    // Close mobile menu when screen size changes to desktop
    if (window.innerWidth > 768) {
      this.isMobileMenuOpen = false;
    }
  }

  ngOnInit() {
    this.updateActiveSection();
    this.themeService.theme$.subscribe(theme => {
      this.currentTheme = theme;
    });
  }

  updateActiveSection() {
    const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
    const scrollPosition = window.scrollY + 100;

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;

        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          if (this.activeSection !== section) {
            this.activeSection = section;
            // Update URL hash without triggering scroll
            this.updateURLHash(section);
          }
          break;
        }
      }
    }
  }

  updateURLHash(section: string) {
    // Update URL hash without triggering scroll behavior
    const currentHash = window.location.hash;
    const newHash = `#${section}`;
    
    if (currentHash !== newHash) {
      // Use history.replaceState to update URL without adding to browser history
      history.replaceState(null, '', newHash);
    }
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    // Close mobile menu after clicking a link
    this.isMobileMenuOpen = false;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
