<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230720092654 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE project_technos (project_id INT NOT NULL, technos_id INT NOT NULL, INDEX IDX_24CDA7F166D1F9C (project_id), INDEX IDX_24CDA7F25F7B143 (technos_id), PRIMARY KEY(project_id, technos_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE project_technos ADD CONSTRAINT FK_24CDA7F166D1F9C FOREIGN KEY (project_id) REFERENCES project (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE project_technos ADD CONSTRAINT FK_24CDA7F25F7B143 FOREIGN KEY (technos_id) REFERENCES technos (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE project_technos DROP FOREIGN KEY FK_24CDA7F166D1F9C');
        $this->addSql('ALTER TABLE project_technos DROP FOREIGN KEY FK_24CDA7F25F7B143');
        $this->addSql('DROP TABLE project_technos');
    }
}
