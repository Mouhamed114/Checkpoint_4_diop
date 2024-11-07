<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\BinaryFileResponse;

class CVController extends AbstractController
{
    public function telechargerCV(): Response
    {
        $cvPath = $this->getParameter('kernel.project_dir') . '/public/cv/CV_DIOP_Mouhamed_JA.pdf';

        return new BinaryFileResponse($cvPath);
    }
}
