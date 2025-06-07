export function Footer() {
  return (
    <footer className="py-10 bg-background border-t">
      <div className="container flex flex-col gap-8 md:gap-12">
        {/* Top Section: Logo and Sitemap */}
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Logo Section */}
          <div className="flex items-center">
            <span className="text-lg font-semibold">DRONEVL</span>
          </div>

          {/* Sitemap Section */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-2">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="/about" className="hover:underline">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/careers" className="hover:underline">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="/blog" className="hover:underline">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-2">Support</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="/help" className="hover:underline">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:underline">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="/faq" className="hover:underline">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-2">Legal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="/privacy" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms" className="hover:underline">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section: Company Name, Phone, and Email */}
        <div className="border-t pt-6 flex flex-col items-center text-center text-sm text-muted-foreground gap-2 md:flex-row md:justify-between">
          <p>&copy; {new Date().getFullYear()} 'Your Company'. All rights reserved.</p>
          <div className="flex flex-col md:flex-row gap-4">
            <p>Phone: +1 (123) 456-7890</p>
            <p>
              Email:
              <a href={`mailto:info@yourcompany.com`} className="hover:underline">
                info@yourcompany.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
