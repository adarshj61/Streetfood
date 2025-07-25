import Material from '../models/Material.js';

export const addMaterial = async (req, res) => {
  const { name, pricePerUnit, quantity, category } = req.body;

  if (req.user.role !== 'supplier') {
    return res.status(403).json({ message: 'Only suppliers can add materials' });
  }

  const material = await Material.create({
    name,
    pricePerUnit,
    quantity,
    category,
    supplier: req.user._id,
  });

  res.status(201).json({ message: 'Material added', material });
};

export const getMaterials = async (req, res) => {
  const materials = await Material.find().populate('supplier', 'name email');
  res.json(materials);
};
