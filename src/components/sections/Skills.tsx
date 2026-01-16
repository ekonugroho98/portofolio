
import React from 'react';

interface SkillItemProps {
  label: string;
  isExpert?: boolean;
}

const SkillItem: React.FC<SkillItemProps> = ({ label, isExpert }) => (
  <div className="skill-card p-4 rounded-lg bg-neutral-surface dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 flex justify-between items-center group transition-all">
    <span className="font-medium">{label}</span>
    {isExpert && (
      <span className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded font-bold">CORE</span>
    )}
  </div>
);

export const Skills: React.FC = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-24 border-t border-gray-100 dark:border-gray-800">
      <div className="flex flex-col gap-16">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold tracking-tight text-[#0c1d1a] dark:text-white">Technical & Functional Expertise</h2>
          <p className="text-gray-500 max-w-2xl">Proven proficiency across various languages, frameworks, and architectural patterns.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="text-2xl">💻</span>
              <h3 className="text-xl font-bold">Languages & Frameworks</h3>
            </div>
            <div className="grid grid-cols-1 gap-3">
              <SkillItem label="Go (Golang)" isExpert />
              <SkillItem label="Java (Spring Boot)" isExpert />
              <SkillItem label="PHP (Laravel, CodeIgniter)" isExpert />
              <SkillItem label="Node.js (Express)" />
              <SkillItem label="JavaScript / Bootstrap" />
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="text-2xl">⚙️</span>
              <h3 className="text-xl font-bold">Architecture & DevOps</h3>
            </div>
            <div className="grid grid-cols-1 gap-3">
              <SkillItem label="Microservices Architecture" isExpert />
              <SkillItem label="REST API / gRPC" isExpert />
              <SkillItem label="Docker / Containerization" />
              <SkillItem label="Git (GitLab, GitHub, Bitbucket)" />
              <SkillItem label="CI/CD Pipelines" />
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🗄️</span>
              <h3 className="text-xl font-bold">Databases & Tools</h3>
            </div>
            <div className="grid grid-cols-1 gap-3">
              <SkillItem label="MySQL / PostgreSQL" isExpert />
              <SkillItem label="Oracle / SQL Server" isExpert />
              <SkillItem label="Redis / NoSQL" />
              <SkillItem label="Postman / API Testing" />
              <SkillItem label="Linux / Server Administration" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
