import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ProfileModule } from './profile/profile.module';
import { UserModule } from './user/user.module';
import { ActivityModule } from './activity/activity.module';
import { LanguageModule } from './language/language.module';
import { EducationModule } from './education/education.module';
import { SkillModule } from './skill/skill.module';
import { SoftSkillModule } from './soft-skill/soft-skill.module';
import { ProjectModule } from './project/project.module';

@Module({
  imports: [ProfileModule, UserModule, ActivityModule, LanguageModule, EducationModule, SkillModule, SoftSkillModule, ProjectModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
