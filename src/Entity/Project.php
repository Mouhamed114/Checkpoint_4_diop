<?php

namespace App\Entity;

use App\Repository\ProjectRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ProjectRepository::class)]
class Project
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $name = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $description = null;

    #[ORM\Column(length: 255)]
    private ?string $linkGithub = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $linkInternet = null;

    #[ORM\Column(length: 255)]
    private ?string $imageHomePage = null;

    #[ORM\ManyToMany(targetEntity: Technos::class)]
    private Collection $technos;

    public function __construct()
    {
        $this->technos = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): static
    {
        $this->name = $name;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): static
    {
        $this->description = $description;

        return $this;
    }

    public function getLinkGithub(): ?string
    {
        return $this->linkGithub;
    }

    public function setLinkGithub(string $linkGithub): static
    {
        $this->linkGithub = $linkGithub;

        return $this;
    }

    public function getLinkInternet(): ?string
    {
        return $this->linkInternet;
    }

    public function setLinkInternet(?string $linkInternet): static
    {
        $this->linkInternet = $linkInternet;

        return $this;
    }

    public function getImageHomePage(): ?string
    {
        return $this->imageHomePage;
    }

    public function setImageHomePage(string $imageHomePage): static
    {
        $this->imageHomePage = $imageHomePage;

        return $this;
    }

    /**
     * @return Collection<int, technos>
     */
    public function getTechnos(): Collection
    {
        return $this->technos;
    }

    public function addTechno(Technos $techno): static
    {
        if (!$this->technos->contains($techno)) {
            $this->technos->add($techno);
        }

        return $this;
    }

    public function removeTechno(Technos $techno): static
    {
        $this->technos->removeElement($techno);

        return $this;
    }
}
