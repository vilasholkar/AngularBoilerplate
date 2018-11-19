# ngx-phone-select
Based on the awesome intl-tel-input by jackocnr(https://github.com/jackocnr/intl-tel-input)
## Installation
First you need to install intl-tel-input and jquery.
Import that to your angular-cli file like this:
```json
      "styles": [
        "../node_modules/intl-tel-input/build/css/intlTelInput.css"
      ],
      "scripts": [
        "../node_modules/jquery/dist/jquery.js",
        "../node_modules/intl-tel-input/build/js/intlTelInput.js",
        "../node_modules/intl-tel-input/build/js/utils.js"
      ],
```
To install this library, run:

```bash
$ npm install ngx-phone-select --save
```

## Consuming your library

Once you have published your library to npm, you can import your library in any Angular application by running:

```bash
$ npm install ngx-phone-select
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import your library
import { NgxPhoneSelectModule } from 'ngx-phone-select';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Specify your library as an import
    NgxPhoneSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once your library is imported, you can use its components, directives and pipes in your Angular application:
For example
```xml
<input type="phone-select"
                   class="form-control"
                   formControlName="phone"
                   [(ngModel)]="model.phoneNumber"
                   #phoneSelect="ngx-phone-select"
                   ngxPhoneSelect>
```

To select country or get country data manually and for automatic form control:
(Example)
```typescript
import ...
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit, AfterViewInit {
  @ViewChild('phoneSelect') phoneSelect;
  setCountry(countryCode) {
    this.phoneSelect.setCountry(countryCode);
  }
  getCountryData() {
    return this.phoneSelect.getCountryData();
  }
   myform = new FormGroup({
          .
          .
          .
          phone: new FormControl('', [
            Validators.required,
            this.phoneSelect
          ]

      });
}

```
## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## License

MIT © [Nikolas Pafitis](mailto:n.pafitis@impactechs.com)
