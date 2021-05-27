import bcrypt from 'bcryptjs';

const make = async (value: string) => bcrypt.hash(value, 10);

const compare = (value: string, valueHash: string) => bcrypt.compare(value, valueHash);

export { make, compare };
