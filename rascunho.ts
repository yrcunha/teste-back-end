/**
async create(request: Request, response: Response) {
  const {
    title,
    description,
    nodejs,
    javastcript,
    typescript,
    typeorm,
    swagger,
    colletcitonPostman,
  } = await request.body;
  const checklistRepository = getRepository(Checklist);

  const checklistAlreadyExists = await checklistRepository.findOne({ title });

  if (checklistAlreadyExists) {
    response.status(400).send({
      message:
        'Checklist já existe! O título deve ser único para identificar cada checklist',
    });
  } else {
    const checklist = checklistRepository.create({
      title,
      description,
      nodejs,
      javastcript,
      typescript,
      typeorm,
      swagger,
      colletcitonPostman,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    await checklistRepository.save(checklist);

    response.status(201).send({ message: 'Checklist cadastrado com sucesso!' });
  }
}

async update(request: Request, response: Response) {
  const { title } = request.query;

  const {
    description,
    nodejs,
    javastcript,
    typescript,
    typeorm,
    swagger,
    colletcitonPostman,
  } = await request.body;

  const checklistRepository = getRepository(Checklist);

  const checklistAlreadyExists = await checklistRepository.findOne({ title });

  if (checklistAlreadyExists) {
    response.status(400).send({
      message:
        'Checklist já existe! O título deve ser único para identificar cada checklist',
    });
  } else {
    const checklist = checklistRepository.create({
      description,
      nodejs,
      javastcript,
      typescript,
      typeorm,
      swagger,
      colletcitonPostman,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    await checklistRepository.save(checklist);

    response.status(201).send({ message: 'Checklist cadastrado com sucesso!' });
  }
}
*/
