<?php

namespace App\DataFixtures;

use App\Entity\Project;
use App\Entity\Technos;
use App\Repository\TechnosRepository;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;

class ProjectFixtures extends Fixture implements DependentFixtureInterface
{
    private TechnosRepository $technosRepository;

    public function __construct(TechnosRepository $technosRepository)
    {
        $this->technosRepository = $technosRepository;
    }

    public function load(ObjectManager $manager): void
    {
        $technosNames = [
            'PHP',
            'JavaScript',
            'Python',
            'Java',
            'C#',
            'Ruby',
            'Swift',
            'C++',
            'TypeScript',
            'Go',
        ];

        $technos = [];
        foreach ($technosNames as $technoName) {
            $existingTechno = $this->technosRepository->findOneBy(['name' => $technoName]);
            if (!$existingTechno) {
                $techno = new Technos();
                $techno->setName($technoName);
                $manager->persist($techno);
                $technos[] = $techno;
            } else {
                $technos[] = $existingTechno;
            }
        }

        $imagePaths = [
            'image1' => 'uploads/images/imgproject-1.gif',
            'image2' => 'uploads/images/imgproject-2.png',
            'image3' => 'uploads/images/imgproject-3.png',
            'image4' => 'uploads/images/imgproject-4.gif',
            'image5' => 'uploads/images/imgproject-5.png',
            'image6' => 'uploads/images/imgproject-6.png',
        ];

        for ($i = 1; $i <= 6; $i++) {
            $project = new Project();
            $project->setName("Projet $i");
            $project->setDescription("Lorem ipsum dolor sit amet, consectetur adipiscing elit.
             Maecenas venenatis ipsum sed eleifend consequat. Fusce tincidunt quam eget tellus vestibulum,
              ac fermentum enim tristique. Integer et tincidunt nunc.");
            $project->setLinkGithub("https://github.com/projet$i");
            $project->setLinkInternet("https://projet$i.example.com");
            $project->setImageHomePage($imagePaths["image$i"]);

            $selectedTechnos = $this->getRandomTechnos($technos);
            foreach ($selectedTechnos as $techno) {
                $project->addTechno($techno);
            }

            $manager->persist($project);
        }

        $manager->flush();
    }

    private function getRandomTechnos(array $technos): array
    {
        shuffle($technos);
        $numTechnos = mt_rand(1, 5);
        return array_slice($technos, 0, $numTechnos);
    }

    public function getDependencies()
    {
        return [
            TechnosFixtures::class,
        ];
    }
}
