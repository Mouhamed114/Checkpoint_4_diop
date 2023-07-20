<?php

namespace App\Service;

use App\Repository\ProjectRepository;

class ProjectService
{
    private ProjectRepository $projectRepository;

    public function __construct(ProjectRepository $projectRepository)
    {
        $this->projectRepository = $projectRepository;
    }

    public function findAllWithTechnos(): array
    {
        return $this->projectRepository->createQueryBuilder('p')
            ->leftJoin('p.technos', 't')
            ->addSelect('t')
            ->getQuery()
            ->getResult();
    }
}
