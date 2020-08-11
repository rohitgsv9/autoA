import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TelegramComponent } from './telegram/telegram.component';
import { HomeComponent } from './home/home.component';
import { ActivewpgroupComponent } from './activewpgroup/activewpgroup.component';
import { AffiliatesettingComponent } from './affiliatesetting/affiliatesetting.component';
import { BitlyComponent } from './bitly/bitly.component';
import { BitlyhelpComponent } from './bitlyhelp/bitlyhelp.component';
import { BitlytokenComponent } from './bitlytoken/bitlytoken.component';
import { BottokenComponent } from './bottoken/bottoken.component';
import { ConvertedComponent } from './converted/converted.component';
import { FillreplacestringComponent } from './fillreplacestring/fillreplacestring.component';
import { FillreplaceurlComponent } from './fillreplaceurl/fillreplaceurl.component';
import { FindwpgroupComponent } from './findwpgroup/findwpgroup.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutDarkNavComponent } from './layout-dark-nav/layout-dark-nav.component';
import { LoginComponent } from './login/login.component';
import { MakepaymentComponent } from './makepayment/makepayment.component';
import { OurplansComponent } from './ourplans/ourplans.component';
import { PaymentComponent } from './payment/payment.component';
import { ProfileComponent } from './profile/profile.component';
import { ProgressComponent } from './progress/progress.component';
import { RegistrationComponent } from './registration/registration.component';
import { ReplacestringComponent } from './replacestring/replacestring.component';
import { ReplaceurlComponent } from './replaceurl/replaceurl.component';
import { TelegrambotComponent } from './telegrambot/telegrambot.component';
import { TelegramhelpComponent } from './telegramhelp/telegramhelp.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { WhatsapphelpComponent } from './whatsapphelp/whatsapphelp.component';
import { WhatsapploginComponent } from './whatsapplogin/whatsapplogin.component';
import { YoururlshortnerComponent } from './yoururlshortner/yoururlshortner.component';
import { HeaderComponent } from './header/header.component';
import { SideComponent } from './side/side.component';



@NgModule({
  declarations: [
    AppComponent,
    TelegramComponent,
    HomeComponent,
    ActivewpgroupComponent,
    AffiliatesettingComponent,
    BitlyComponent,
    BitlyhelpComponent,
    BitlytokenComponent,
    BottokenComponent,
    ConvertedComponent,
    FillreplacestringComponent,
    FillreplaceurlComponent,
    FindwpgroupComponent,
    FooterComponent,
    LayoutDarkNavComponent,
    LoginComponent,
    MakepaymentComponent,
    OurplansComponent,
    PaymentComponent,
    ProfileComponent,
    ProgressComponent,
    RegistrationComponent,
    ReplacestringComponent,
    ReplaceurlComponent,
    TelegrambotComponent,
    TelegramhelpComponent,
    UserprofileComponent,
    WhatsapphelpComponent,
    WhatsapploginComponent,
    YoururlshortnerComponent,
    HeaderComponent,
    SideComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
