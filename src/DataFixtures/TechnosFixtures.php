<?php

namespace App\DataFixtures;

use App\Entity\Technos;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class TechnosFixtures extends Fixture
{
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

        foreach ($technosNames as $technoName) {
            $techno = new Technos();
            $techno->setName($technoName);
            $manager->persist($techno);
        }

        $manager->flush();
    }
}
